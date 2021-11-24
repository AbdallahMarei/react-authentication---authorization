import React from 'react';
import Card from '../components/card/card.component';
// import SignIn from '../components/sign-in/sign-in.component';
import SignInClass from '../components/sign-in-class/sign-in-class.component';
import SignInCheck from '../components/sign-in-check/sign-in-check.component';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            status: false,
            role: 0,
            userName: "",
            users: [{firstName: "Abdallah",email:"abdullahmari@gmail.com",password:"123456"}],
            items:[
                {
                    id:1,
                    name:"abdallah",
                    age:24
                },
                {
                    id:2,
                    name:"ali",
                    age:25
                },
                {
                    id:3,
                    name:"samer",
                    age:29
                },
                {
                    id:4,
                    name:"ahmad",
                    age:21,
                },
                {
                    id:5,
                    name:"ahmad",
                    age:21,
                },
                {
                    id:6,
                    name:"ahmad",
                    age:21,
                },
                {
                    id:7,
                    name:"ahmad",
                    age:21,
                },
                {
                    id:8,
                    name:"ahmad",
                    age:21,
                },
            ]
        }
    }

    addToUsers = (user) => {
        const newUser = this.state.users
        newUser.push(user)
        this.setState({users: newUser})
    }
    checkUsers= (first,email,pass) => {
        let name = false
        let arrayLoop = this.state.users
         arrayLoop.forEach(user =>{
            if(user.firstName === first.trim() && user.email === email.trim() && user.password === pass.trim()){
            name = user.firstName;
            } 
         })
         console.log(name)
         if(name && name !== "Abdallah") {
            alert(`Hello ${name}`) 
            this.setState({userName: name, role:0, status: true})
         } else if (name === "Abdallah"){
            alert(`Hello ${name}`) 
            this.setState({userName: name, role:1,status: true})
         } else alert(`No user found`)
          
    }


    render(){
        const {users} = this.state;
        const newItems = this.state.items.map(({id,...otherProps}) => {return <Card key={id} {...otherProps}/>}) 
        return (
        <div>
            {/* <div className="home-page">
                {
                   items.map(({id,...otherProps}) => {return <Card key={id} {...otherProps}/>}) 
                }
            </div> */}
            {/* <div className="sign-in">
                <SignIn />
            </div> */}
            <div className="sign-in">
                <SignInClass users={users} addUser={this.addToUsers}/>
            </div>
            <div className="sign-in">
                <SignInCheck users={users} check={this.checkUsers}/>
            </div>
            {this.state.status ? 
            <div>
                {this.state.role ? <div className="home-page">{newItems}</div> : <div className="homepage"><p>Hello normal user</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat non. Quisquam rerum dolores perferendis dolor nemo nobis quo molestiae iusto facilis, alias tempore consequatur atque temporibus voluptatibus dolorem quae. Neque quam blanditiis, quod nemo saepe magni laborum at ducimus esse commodi in molestiae illum aperiam fugiat cum ullam vel suscipit dignissimos ratione eum? Molestiae maiores nostrum et iste enim! Sint dolorum eius optio suscipit quidem impedit nihil voluptas reiciendis nam quia nostrum voluptatem ullam eaque culpa ea distinctio perferendis consequatur, enim at ipsum corrupti quod cum, dignissimos ab? Reiciendis error rem illo rerum fugiat alias voluptatem obcaecati. Eos vitae repellat fugit suscipit voluptates ullam vel placeat, quas illo est id ab, expedita laboriosam assumenda vero nemo repudiandae animi blanditiis omnis reprehenderit unde. Assumenda minima repellat eaque nisi ut sed voluptatibus, obcaecati in impedit aut dolor commodi ratione odio. Incidunt, possimus explicabo. Vel, error! Eum, earum soluta! Fugiat delectus neque a aliquid laborum accusantium debitis id. Incidunt, quod accusantium iure temporibus quo nam fugit autem accusamus nesciunt neque cum consectetur necessitatibus quas quibusdam aut aliquid, beatae ullam velit! Delectus quae vero, non animi impedit sunt dolorem laudantium veritatis quod architecto voluptates doloremque optio deleniti, dolore modi error voluptas molestiae ipsam.</p></div>}
            </div> : null}
            
        </div>
        )
    }
}

export default HomePage;
