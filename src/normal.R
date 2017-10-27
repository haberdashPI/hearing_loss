library(ggplot2)

df = data.frame(x = seq(-6,6,length.out=1000))
ggplot(df,aes(x=x,y=dnorm(x),group=1)) + geom_line() + theme_classic()
ggsave("norm.pdf",width=6,height=3)
