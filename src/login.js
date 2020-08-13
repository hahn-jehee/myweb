
function Login2(){

  return(
    <div>
    <Input/>
    <Button onClick = {(e) => {
      console.log(e)
      alert(e.target.value)
    }}> Login </Button>
    </div>

  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "사실 난 이 순간만을 기다려왔다우"}
  }

  render(){
    return(
      <div>
      <Input onChange = {(e) => this.setState({id : e.target.value})}/>
      <Button onClick = {(event) => {
        alert(this.state.id)
      }}> Login </Button>
      </div>
    )
  }
}
