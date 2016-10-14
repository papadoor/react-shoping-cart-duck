import React from 'react';
import Carousel from 'nuka-carousel';
const Banner = React.createClass({
  render() {
    var heigh = {maxHeight : 900};
    var Decorators = [
      {
        component: React.createClass({

          shouldComponentUpdate(nextProps, nextState) {
              return this.props.currentSlide !== nextProps.currentSlide;
          },

          render() {
            return (
              <div>
                <a className="fa fa-chevron-circle-left fa-3x" onClick={this.props.previousSlide} aria-hidden="true"></a>
              </div>
            )
          }
        }),
        position: 'CenterLeft',
        style: {
          padding: 20
        }
      },
      {
        component: React.createClass({

          shouldComponentUpdate(nextProps, nextState) {
              return this.props.currentSlide !== nextProps.currentSlide;
          },

          render() {
            return (
              <div>
                <a className="fa fa-chevron-circle-right fa-3x" onClick={this.props.nextSlide} aria-hidden="true"></a>
              </div>
            )
          }
        }),
        position: 'CenterRight',
        style: {
          padding: 20
        }
      }
    ];
    return (
      <header >
        <Carousel style={heigh} decorators={Decorators}>
          <img src={require('../../../../assets/images/cover-one.jpg')} className="img-responsive" style={heigh} />
          <img src={require('../../../../assets/images/cover-three.jpg')} className="img-responsive" style={heigh} />
          <img src={require('../../../../assets/images/cover-two.jpg')} className="img-responsive" style={heigh} />
        </Carousel>
      </header>
    )
  }
});


export default Banner;