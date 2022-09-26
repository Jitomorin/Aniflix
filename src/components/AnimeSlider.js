import React from 'react'
import './styles.css'

export const AnimeSlider = (props) => {
  return (
    <div
                className="slider_content"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #000 100%),linear-gradient(to top, rgba(255, 255, 255, 0) 0, #000 100%),linear-gradient(to left, rgba(255, 255, 255, 0) 0, #000 100%),url("' +
                    props.image_url +
                    '")',
                }}
              >
                <h1>{props.title}</h1>
                <h3>{props.status}</h3>

                <div className="slider_synopsis">
                  <span className="synopsis">{props.synopsis}</span>
                </div>
              </div>
  )
}
