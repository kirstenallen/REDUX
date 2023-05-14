import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());



const dateFormat = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).replace(/AM|PM/,'');


  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock,300);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return <div>
  <div style={{fontSize:'10px', letterSpacing:'3px'}} className="pb-3 text-gray-500 glimmer red-hat pt-3 pl-3 flex flex-row nowrap text-center align-middle items-center align-center w-full place-content-center content-center justify-items-center relative mx-auto">
    <div>{dateFormat}</div>
  </div>
</div>
  ;


    }

    export default Clock;
