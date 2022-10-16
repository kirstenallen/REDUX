export default function Bootmenu(props) {
return (
  <div id="bootmenu fadeOut" key={props.title} className="bg-blue-500 absolute top-0 right-0 h-full w-full" id={props.title} style={{zIndex:'9'}}>
    <div className="table w-full h-full">
      <div className="table-cell h-full align-middle text-center w-6/12">
        <div className="w-6/12 block align-middle mx-auto">
            <div className="bootlineholder">
            <div className="bootline">
            </div>
            </div>
            <p className="block absolute top-5px text-white animate-bounce">booting ...</p>
          </div>
      </div>
    </div>
  </div>
)
}
