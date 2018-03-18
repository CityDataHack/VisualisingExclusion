library(GGally)
library(ggplot2)#library("ggplot2", lib.loc="~/R/win-library/3.4")
library(reshape)
library(devtools)
#£install_github("vqv/ggbiplot")
library(ggbiplot)
library(ggfortify)
library(factoextra)
library(sf)
library(sp)
library(rgdal)
library(maptools)
library(RColorBrewer)
library(tmaptools)
library(tmap)
library(regeos)
library(OpenStreetMap)
library(geojsonio)
library(classInt)

#Reading data
data<-read.csv("hack.csv",header=TRUE,sep=",")
ggpairs(data[,2:7])
ggpairs(data[,8:13])
ggpairs(data[,14:19])
ggpairs(data[,20:25])
summary(data)
#boxplot(data[,2])
#log_data<-cbind(data[,1],log(data[,2:ncol(data)]))

#Perform PCA
data.pca<-prcomp(data[,2:ncol(data)],center=TRUE,scale. = TRUE)
#Loadings(Rotation) for each variable.
#From these we can check which original variables influence the most in each PC(principal component)
#Usually, we are interested in PC1 and PC2
#5 most positive and 5 most negatives for each PC
print(data.pca)
scores <- as.data.frame(data.pca$rotation)
scores<-cbind(1:40,scores)

write_csv(scores, "scores.csv")

scores[order(scores$PC1),c(1:2)]
scores[order(scores$PC2),c(1,3)]

#Plot of variances associated with each PC
plot(data.pca,type="l")

#Importance of components (how much variance is explained by each component)
summary(data.pca)

#Biplot ()
g4 <- ggbiplot(data.pca, obs.scale = 1, var.scale = 1, ellipse = TRUE, 
              circle = FALSE,varname.size = 4)+
  scale_color_discrete(name = '')+
  theme(legend.direction = 'horizontal', 
               legend.position = 'top')+
  xlim(-5.5,10)+ylim(-4.5,4)+
  labs(title="Biplot of variables and observations")+
  theme(plot.title = element_text(hjust = 0.5)) #Center title
print(g4)

#Plotting only observations
autoplot(data.pca)+
  labs(title="Observations factor map")+
  theme(plot.title = element_text(hjust = 0.5)) #Center title

#Plotting only variables (second try)
g3 <- ggbiplot(data.pca, obs.scale = 1, var.scale = 1, alpha=0, 
               circle = TRUE, varname.size = 4)+
  theme(legend.direction = 'horizontal', 
                 legend.position = 'top')+
      xlim(-5,5)+
  labs(title="Variables factor map")+
  theme(plot.title = element_text(hjust = 0.5)) #Center title
print(g3)

#Saving observations projected into PC1 and PC2
proj_data<-data.pca$x[,1:2]
rownames(proj_data)<-data$Codes

#Determining The Optimal Number Of Clusters
#Elbow, Silhouhette and Gap statistic methods
# Elbow method
fviz_nbclust(proj_data, kmeans, method = "wss") +
  geom_vline(xintercept = 3, linetype = 2)+
  labs(subtitle = "Elbow method")
# Silhouette method
fviz_nbclust(proj_data, kmeans, method = "silhouette")+
  labs(subtitle = "Silhouette method")
# Gap statistic
# nboot = 50 to keep the function speedy. 
# recommended value: nboot= 500 for your analysis.
# Use verbose = FALSE to hide computing progression.
set.seed(123)
fviz_nbclust(proj_data, kmeans, nstart = 25,  method = "gap_stat", nboot = 50)+
  labs(subtitle = "Gap statistic method")

set.seed(1)
autoplot(kmeans(proj_data, centers=3,iter.max=100), data = proj_data,label=FALSE)+
  labs(title="Observations factor map colored by cluster \n( kmeans, k = 3 )")+
  theme(plot.title = element_text(hjust = 0.5))+ #Center title
  xlim(-0.3,0.6)+
  scale_fill_brewer(palette="YlOrRd")


clusters<-kmeans(proj_data, centers=3,iter.max=100)
clusters$cluster

df <- as.data.frame(clusters$cluster)
data$cluster<-clusters$cluster

lsoas<- readOGR("hack/ESRI/LSOA_2011_London_gen_MHW.shp")

UKBNG <- "+init=epsg:27700"

lsoas_bng <- spTransform(lsoas, CRS(UKBNG))

lsoas_b <- lsoas_bng[grep("^Barking",lsoas_bng@data$LSOA11NM),]

lsoas_b_SF <- st_as_sf(lsoas_b,CRS(UKBNG))



lsoas_b@data$cluster<-as.factor(data$cluster)
plot(lsoas_b)

lsoas_b@data$cluster_ind<-data.pca$x[,2]



tmap_mode("view")
tm_shape(lsoas_b) +
  tm_fill("cluster_ind", style="pretty", palette="YlOrRd", n=3)

?tm_fill()
tm_shape(lsoas_b) +
  tm_fill("cluster", style="pretty", palette="YlOrRd")


#OpenStreetMaps

lsoas_building<- readOGR("hack/greater-london-latest-free.shp/gis.osm_buildings_a_free_1.shp")

UKBNG <- "+init=epsg:27700"

lsoas_buildings_bng <- spTransform(lsoas_building, CRS(UKBNG))


l_building_SF <- st_as_sf(lsoas_buildings_bng, CRS(UKBNG))



test<-st_intersection(l_building_SF,lsoas_b_SF)

summary(l_building_SF)
summary(lsoas_b_SF)
