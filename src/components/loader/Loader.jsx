import React from 'react'
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = ({height,skeletonWidth,skeletonMargin,display,alignItems,width, margin,count,array}) => {
  return (
    <SkeletonTheme color="grey" highlightColor="#444">
        <section style={{display:display, alignItems:alignItems, width:width, margin:margin}} >
            {
                [...Array(array)].map(() => (
                    <Skeleton height={height} width={skeletonWidth} count={count} style={{margin:skeletonMargin}} />
                ))
            }
        </section>
    </SkeletonTheme>
  )
}

export default Loader