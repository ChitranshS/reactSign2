import { Fragment, useState, useRef } from "react";
import React from "react";
import Typed from "react-typed";

const Defaultwrap = (props) => {
  // // Create reference to store the DOM element containing the animation
  // const el = useRef(null);
  // // Create reference to store the Typed instance itself
  // const typed = useRef(null);

  // React.useEffect(() => {
  //   const options = {
  //       strings: [
  //       'Step <i>Into</i> Future',
  //       'Step <strong>Into</strong> Vision',
  //     ],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //   };

  //   // elRef refers to the <span> rendered below
  //   typed.current = new Typed(el.current, options);

  //   return () => {
  //     // Make sure to destroy Typed instance during cleanup
  //     // to prevent memory leaks
  //     typed.current.destroy();
  //   }
  // }, [])
  <script type="module" src="dist/main.js" crossorigin></script>;
  return (
    <Fragment>
      <div className="content">
        <center>
          <div className="text-1">
            <Typed
              strings={(["Step into Vision"], ["Step into Future"])}
              typeSpeed={80}
              loop
            />
            <br />
          </div>
          <a onClick={props.Change}>
            <br />
            <button className="btn">Begin</button>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="sv" fill="none" viewBox="0 0 80 50" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg> */}
          </a>
        </center>
        {/* Second Section Maybe */}
        {/* <div className="section-1">
          <div className="text-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            provident voluptas sint eius consectetur, facilis nobis porro
            perferendis possimus fugit maiores minus ma Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Placeat provident voluptas sint
            eius consectetur, facilis nobis porro perferendis possimus fugit
            maiores minus maxime assumenda mollitia aliquam ratione,
            consequuntur eos magni? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Placeat provident voluptas sint eius consectetur,
            facilis nobis porro perferendis possimus fugit maiores minus maxime
            assumenda mollitia aliquam ratione, consequuntur eos magni? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            provident voluptas sint eius consectetur, facilis nobis porro
            perferendis possimus fugit maiores minus maxime assumenda mollitia
            aliquam ratione, consequuntur eos magni?xime assumenda mollitia
            aliquam ratione, consequuntur eos magni?
          </div>
        </div> */}
      </div>
      {/* <span className="content2"><img src={logo}/></span> */}
    </Fragment>
  );
};
export default Defaultwrap;
