import { Component } from "react";
import '../styles/Form.css';

class Form extends Component<{}, { title: string, description: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Untitled Title",
            description: "Enter form description"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event: { state: { title: string; description: string; }; }) {
        const { title, description } = event.state;
        // event.preventDefault();
        alert(`
        title: ${title}, 
        description: ${description}
        `)
    }
    handleChange(event: any) {
        this.setState({
            title: event.target.title,
            description: event.target.description
        })
    }
    render() {
        return (
            <>
                {/* <form onSubmit={()=>this.handleSubmit}> */}
                <div className="border">
                    <div className="title">
                        <input type="text" name="title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                    <div className="description">
                        <input type="description" name="description"
                            value={this.state.description}
                            onChange={this.handleChange} />
                    </div>
                </div>
                <div>
                <button>Submit</button>
                </div>
                {/* </form> */}
            </>
        )
    }
}
export default Form;

