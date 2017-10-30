library(ggplot2)
library(RColorBrewer)
REL = function(L) (480 / 2^((L-85)/3)) 

df = data.frame(level=c(80,90,100,110))

cols = rev(brewer.pal(7,'YlOrRd'))

ticks = c(1:10,seq(20,100,10),seq(200,1000,100),2000)
## mticks = c(1,2,5,10,20,50,100,120,150)
mticks = c(1,10,100,1000)
labels = rep("",length(ticks))
labels[ticks %in% mticks] = mticks

ggplot(df,aes(x=factor(level),y=log(REL(level)),
              fill=log(REL(level)))) + geom_bar(stat='identity',color='black') +
    theme_classic(base_size=23) +
    ylab('Minutes of Exposure') +
    xlab('dB SPL') +
    scale_y_continuous(breaks=log(ticks),labels=labels) +
    ## coord_cartesian(ylim=log(c(1,200))) +
    scale_fill_gradient2(low = cols[1],
                         mid = cols[4],
                         midpoint=log(REL(95)),
                         high = cols[length(cols)],
                         guide = F)
ggsave('../assets/REL.pdf',width=8,height=4.5)

