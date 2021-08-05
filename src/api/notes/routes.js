const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler, // hanya menerima dan menyimpan "satu" note
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getNotesHandler, // mengembalikan "banyak" note
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler, // mengembalikan "satu" note
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler, // hanya menerima dan mengubah "satu" note
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler, // menghapus "satu" note
  },

];

module.exports = routes;
