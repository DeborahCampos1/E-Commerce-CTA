
const SelectOptions =(handleSort)=>{
    let options = [" Price High-Low ", " Price Low-High", " Featured Product"]
    return(
            <form onChange={(e)=>handleSort}>
                <label><h3>Sort Product By:  </h3></label>
                <select name="selectList" id="selectList">
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                </select>
                {/* <input type="submit"></input> */}
            </form>
    ) 
}
export default SelectOptions
