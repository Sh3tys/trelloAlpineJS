document.addEventListener('alpine:init', () => {
  Alpine.store('modal', {
    show: false,
    type: null,
    title: '',
    content: '',
    placeholder: '',
    input: '',
    callback: null,

    open(type, content, title = '', placeholder = '', callback = null) {
      console.log('Ouverture modal:', type, content);
      this.type = type;
      this.content = content;
      this.title = title;
      this.placeholder = placeholder;
      this.callback = callback;
      this.show = true;
    },

    close() {
      console.log('Fermeture modal');
      this.show = false;
      this.type = null;
      this.title = '';
      this.content = '';
      this.placeholder = '';
      this.input = '';
      this.callback = null;
    },

    confirm() {
      console.log('Action confirmée');
      if (this.callback) {
        this.callback(true);
      } else {
        alert('Action confirmée !');
      }
      this.close();
    },

    submitForm() {
      console.log('Valeur entrée:', this.input);
      if (this.callback) {
        this.callback(this.input);
      } else {
        alert('Nom entré : ' + this.input);
      }
      this.close();
    },
  });
});
