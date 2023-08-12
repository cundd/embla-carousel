"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9867],{9867:function(a,e,n){n.r(e),e.default='import React, { useState, useCallback } from \'react\'\n \nconst PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`\n \ntype PropType = {\n  imgSrc: string\n  inView: boolean\n  index: number\n}\n \nexport const LazyLoadImage: React.FC<PropType> = (props) => {\n  const { imgSrc, inView, index } = props\n  const [hasLoaded, setHasLoaded] = useState(false)\n \n  const setLoaded = useCallback(() => {\n    if (inView) setHasLoaded(true)\n  }, [inView, setHasLoaded])\n \n  return (\n    <div className="embla__slide">\n      <div\n        className={\'embla__lazy-load\'.concat(\n          hasLoaded ? \' embla__lazy-load--has-loaded\' : \'\'\n        )}\n      >\n        {!hasLoaded && <span className="embla__lazy-load__spinner" />}\n        <div className="embla__slide__number">\n          <span>{index + 1}</span>\n        </div>\n        <img\n          className="embla__slide__img embla__lazy-load__img"\n          onLoad={setLoaded}\n          src={inView ? imgSrc : PLACEHOLDER_SRC}\n          alt="Your alt text"\n          data-src={imgSrc}\n        />\n      </div>\n    </div>\n  )\n}\n'}}]);
//# sourceMappingURL=9867-2d94f77d4eb343b6011d.js.map