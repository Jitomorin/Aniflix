import React from 'react'
import LoadingAnim from '../resources/anime_loading.gif'

export const OnePieceLoadingAnimation = () => {
  return (
      <div style={{ display:'flex',alignItems:'center', height: '100vh', width: '100vw', backgroundColor:'black'}}>
        <img src={LoadingAnim} alt="Loading" style={{ height: '60%', width: '100%', objectFit: 'contain' }} />
    </div>
  )
}
