import {useState,useRef} from 'react';

interface PersonTemplate{
    id: string;
    isActive: boolean;
    picture: string;
    age: number;
    name: string;
    email: string;
    address: string;
    about: string;
    registered: string;
}


export default function Person({id,isActive,picture,age,name,email,address,about,registered}:PersonTemplate){

    const [data,setData] = useState<PersonTemplate>({
        id: id,
        isActive: isActive,
        picture: picture,
        age: age,
        name: name,
        email: email,
        address: address,
        about: about,
        registered: registered
    })

    const isActiveRef = useRef<HTMLInputElement>(null);
    const pictureRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const aboutRef = useRef<HTMLTextAreaElement>(null);
    const registeredRef = useRef<HTMLInputElement>(null);

    const Save = () =>{
        let newObj = {
            id: id,
            isActive: isActiveRef.current ? isActiveRef.current.checked : isActive,
            picture: pictureRef.current ? (pictureRef.current.value !== "" ? pictureRef.current.value : picture) : picture,
            age: ageRef.current ? (ageRef.current.value !== "" ? parseInt(ageRef.current.value) : age) : age,
            name: nameRef.current ? (nameRef.current.value !== "" ? nameRef.current.value : name) : name,
            email:  emailRef.current ? (emailRef.current.value !== "" ? emailRef.current.value : email) : email,
            address:  addressRef.current ? (addressRef.current.value !== "" ? addressRef.current.value : address) : address,
            about:  aboutRef.current ? (aboutRef.current.value !== "" ? aboutRef.current.value : about) : about,
            registered:  registeredRef.current ? (registeredRef.current.value !== "" ? registeredRef.current.value : registered) : registered,
        }

        setData(newObj)
    }


    return(<div className="person-wrapper">
        <div className="person">
            <h2>{data.name}</h2>

            <div className='row'>
                <p><span>Id:</span> {data.id}</p>
                <span>not editable</span>
            </div>

            <div className='row'>
                <p><span>Is active:</span> {data.isActive?.toString()}</p>
                <input placeholder="edit activity"  type="checkbox" ref={isActiveRef}/>
            </div>

            <div className='row'>
                <p><span>Picture:</span> </p> <img src={data.picture}/>
                <input placeholder="edit picture" type="text"   ref={pictureRef}/>
            </div>

            <div className='row'>
                <p><span>Age:</span> {data.age}</p>
                <input placeholder="edit age" type="number" ref={ageRef}/>
            </div>

            <div className='row'>
                <p><span>Name:</span> {data.name}</p>
                <input placeholder="edit name" type="text" ref={nameRef}/>
            </div>

            <div className='row'>
                <p><span>Email:</span> {data.email}</p>
                <input placeholder="edit email" type="email" ref={emailRef}/>
            </div>

            <div className='row'>
                <p><span>Address:</span> {data.address}</p>
                <input placeholder="edit address" type="text" ref={addressRef}/>
            </div>

            <div className='row'>
                <p><span>About:</span> {data.about}</p>
                <textarea ref={aboutRef}/>
            </div>

            <div className='row'>
                <p><span>Registered:</span> {data.registered}</p>
                <input placeholder="edit" type="datetime-local" ref={registeredRef}/>
            </div>

            <div className="save">
                <button onClick={Save}>Save</button>
            </div>

        </div>
    </div>)
}