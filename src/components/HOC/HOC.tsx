import React from 'react';
import { Video, Article, Popular, New } from '../ListVideo/ListVideo'
import { THocItem, TItem } from '../Types/types';
import '../ListVideoCss/listVideoCss.css'

export function popularOrNew(Component: React.FC<TItem>){
  return function(props: THocItem){
    const {item} = props;
    return chooseDesign(item)
}

function chooseDesign(item: TItem){
  if(item.views >= 1000){
      return <Popular>{<Component {...item}/>}</Popular>
    } else if(item.views < 100){
      return <New>{<Component {...item}/>}</New>
    } else return <Component {...item}/>
  }
}

export const VideoPopularOrNew = popularOrNew(Video)
export const ArticlePopularOrNew = popularOrNew(Article)
