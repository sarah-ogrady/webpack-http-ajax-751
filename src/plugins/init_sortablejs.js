import Sortable from 'sortablejs';

const initSortable = () => {
  const options = {
    ghostClass: "ghost",
    animation: 150
  }
  const list = document.querySelector('#results');
  Sortable.create(list, options);
};

export { initSortable };
