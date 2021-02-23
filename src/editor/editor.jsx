import React from 'react'
import ReactQuill from 'react-quill'
import debounce from '../helper'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class EditorComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            body: '',
            title: '',
            id: ''
        }
    }

    // executed after the first render
    componentDidMount = () => {
        this.setState({
            body: this.props.selectedNote.body,
            title:this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
    }

    //triggered whenever render is updated
    componentDidUpdate = () => {
        if(this.props.selectedNote.id !== this.state.id) {
            this.setState({
                body: this.props.selectedNote.body,
                title:this.props.selectedNote.title,
                id: this.props.selectedNote.id
            })
        }
    }
    render(){
        const {classes} = this.props
        return(
            <div className={classes.editorContainer}>
                <BorderColorIcon
                    className={classes.editIcon}>
                </BorderColorIcon>
                {/* title */}
                <input
                    className={classes.titleInput}
                    placeholder={'Note title..'}
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e)=> this.updateTitle(e.target.value)}>
                </input>

                {/* note body */}
                <ReactQuill 
                    value = {this.state.body}
                    onChange = {this.updateBody}/>
            </div>
        )
    }
    updateBody = async (val)=>{
        await this.setState({body:val})
        this.update()
    }
    updateTitle = async (txt) => {
        await this.setState({title:txt})
        this.update()
    }
    //update every 1.5 sec
    update = debounce(()=>{
        this.props.noteUpdate(this.state.id, {
            title:this.state.title,
            body: this.state.body
        })
    }, 1500)
}

export default withStyles(styles)(EditorComponent)

//export default withStyles(injectCSS)(intoThisComponent)
// and call  'const {classes} = this.props' in component
// use classes as className={classes.cssVariable}