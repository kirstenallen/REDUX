export default function Bootmenu(props) {
return (
  <div id="bootmenu"  key={props.title} className="bg-blue-500 fixed top-0 right-0 h-full w-full overflow-hidden" style={{zIndex:'1'}}>
    <div className="table w-full h-full">
    {props.title}
      <div className="table-cell align-middle h-full relative inset-0 text-center w-6/12">
        <div className="w-6/12 block align-middle mx-auto">
            <div className="top-24 bootlineholder">
            <div className="bootline">
            </div>
            </div>
            <p className="block relative top-5px text-white animate-bounce">booting ...</p>
              <p className="block relative top-5px text-white animate-bounce">booting ...</p>

          </div>

      </div>



    </div>
  </div>
)
}
