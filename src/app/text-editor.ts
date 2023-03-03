import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import Quill from 'quill'
import BlotFormatter from "quill-blot-formatter";

Quill.register("modules/blotFormatter", BlotFormatter);

const Image = Quill.import('formats/image'); // Had to get the class this way, instead of ES6 imports, so that quill could register it without errors

const ATTRIBUTES = [
  'alt',
  'height',
  'width',
  'class', 
  'style', // Had to add this line because the style was inlined
];

class CustomImage extends Image {
  static formats(domNode: any) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      const copy: any = { ...formats };

      if (domNode.hasAttribute(attribute)) {
        copy[attribute] = domNode.getAttribute(attribute);
      }

      return copy;
    }, {});
  }

  format(name: any, value: any) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this['domNode'].setAttribute(name, value);
      } else {
        this['domNode'].removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}

Quill.register({
   'formats/image': CustomImage
});

export class TextEditor{
    content : any
    blured = false
    focused = false
    editor : any
    modules = {
        blotFormatter :{

        },
        'toolbar': {
          container: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
  
            [{ 'header': 1 }, { 'header': 2 }, { 'header': 3}],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
  
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
  
            ['clean'],                                         // remove formatting button
  
            ['link', 'image'],                         // link and image, video
          ]      
        }
      }

    created(event: any) {
        // tslint:disable-next-line:no-console
    }

    changedEditor(event: EditorChangeContent | EditorChangeSelection) {
        // tslint:disable-next-line:no-console
    }

    focus($event: any) {
        // tslint:disable-next-line:no-console
        this.focused = true
        this.blured = false
    }

    blur($event: any) {
        // tslint:disable-next-line:no-console
        this.focused = false
        this.blured = true
    }
}