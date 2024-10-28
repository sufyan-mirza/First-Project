import './banner.css'
import './bg.jpg'
import './responive.css'

export default function Banner(){
    /*
        document.getElementById('myform').addEventListener('submit',function(event)
    {
        event.preventDefault();

        document.getElementById('nameError').textContent=''
        document.getElementById('emailError').textContent=''
        document.getElementById('serviceError').textContent=''
        document.getElementById('messageError').textContent=''

        const name=document.getElementById('name').value;
        const email=document.getElementById('name').value;
        const service=document.getElementById('name').value;
        const message=document.getElementById('name').value;

        let hasError=false
        let emailcheck=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!name){
            document.getElementById('nameError').textContent="name is required";
            hasError =true
        }
        if(!email){
            document.getElementById('emailError').textContent="email is required"
            hasError =true
        }
        else if(!emailcheck.test(email)){
            document.getElementById('emailError').textContent="email pattern is wrong"
            hasError=true
        }
        if(!service){
            document.getElementById('serviceError').textContent="service is required"
            hasError =true
        }
        if(!message){
            document.getElementById('messageError').textContent="message is required"
            hasError =true
        }
        if(!hasError){
            alert('form submitted successfully')
            document.getElementById('myform').reset()
        }




    })*/
    
    
    return(
        <div>
        <section className="banner">
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-text">
                        <h4>FOR MILLIONS OF USERS</h4>
                        <h1>Power Digital <br/>IT Solution Company</h1>
                        <p>Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.</p>
                        <div className="get-btn">
                            <a href="https://www.youtube.com/"><i class="fa-solid fa-play"></i></a><a href="1">GET STARTED</a>
                            
                        </div>
                    </div>
                    
                    
                    <div className="banner-form">
                        
                        <form id="myform">
                            <h1>Lorem Ispusm</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief.</p>
                            <input type="text" placeholder="Name" className="form-name" id="name" required/>
                            <span id="nameError"></span>
                            <input type="text" placeholder="Email" className="form-name" id="email" required/>
                            <span id="emailError"></span>
                            <input type="text" placeholder="Service" className="form-name" id="service" required/>
                            <span id="serviceError"></span>
                            <textarea rows="5" name="message" placeholder="Messaage" className="form-name" id="message" required/>
                            <span id="messageError"></span>
                            <button>SUBMITt</button>
                        </form>
                    </div>
                </div>

            </div>

        </section>
        </div>
    )
}