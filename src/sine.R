library(ggplot2)

df = data.frame(x = seq(0,4,length.out=1000))
ggplot(df,aes(x=x,y=sin(2*pi*x),group=1)) + geom_line() + theme_classic()
ggsave("sine.pdf",width=6,height=3)
