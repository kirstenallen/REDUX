export default function Bootmenu(props) {
return (
  <div id="bootmenu"  key={props.title} className="bg-blue-500 fixed top-0 right-0 h-full w-full overflow-hidden" style={{zIndex:'1'}}>
    <div className="table w-full h-full">
    {props.title}
      <div className="table-cell align-middle h-full relative inset-0 w-6/12">
        <div className="w-6/12 sm:w-10/12 block align-middle mx-auto">
        <p className="block relative text-white pb-4 ">booting <span className="inline-block glimmer">...</span></p>
            <div className="top-24 bootlineholder rounded-sm">
            <div className="bootline">
            </div>
            </div>

      <div className="relative w-full flex flex-row red-hat space-evenly space-between" style={{'textAlign':'start'}}>
        <div className="w-full mx-auto text-left grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 my-12 sm:mx-2 sm:my-4 sm:w-full" style={{'fontSize':'8px'}}>
          <p className="block relative text-white">loading parameters
          </p>
          <p className="block relative text-white">Memory Test : _ 640k
          </p>
          <p className="block relative text-white">Plug and Play : _ 1997REACT
          </p>
          <p className="block relative text-white">Version : _ 1.0.2
          </p>
          <p className="block relative text-white">Verifying pool data ...
          </p>
          <p className="block relative text-white">Starting KIOSK95
          </p>
          <p className="block relative text-white ">Organizing images
          </p>
          <p className="block relative text-white text-bold text-underline" style={{'fontSize':'12px'}}>secretCode : _ <span className="inline-block glimmer">skifree</span>
          </p>
          <p className="block relative text-white">loading layers 1 - 99_
          </p>
          <p className="block relative text-white">error : _ broken string in the gizmo
          </p>
          <p className="block relative text-white">warning : _v1.0.3 update available
          </p>
          <p className="block relative text-white">boot : _guestmode
          </p>
        </div>

</div>
          </div>
      </div>
    </div>
  </div>
)
}
