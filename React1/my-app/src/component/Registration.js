const Registration=()=>{
    function submitform(){
        let name=document.getElementById("name").value;
        let id=document.getElementById("id").value;
        document.getElementById("res").innerHTML="Name : "+name+ " Id : "+id;
    }
    return(
        <>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name"/><br/>
            <label for="id">Id</label>
            <input type="number" id="id"/><br/>
            <button type="submit" onClick="submitform()">Submit</button>
        </form>
        <div id="res"></div>
        </>
    )
}

export default Registration;