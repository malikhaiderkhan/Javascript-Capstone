const navWrap = document.querySelector('#nav');

const nav = `
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link" href="index.html">
      <img src="imgs/exquisite.png" class="logo" alt="main logo" />
    </a>
  </li>
  <li class="nav-item pt-4">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item pt-4">
    <a class="nav-link" href="#">Menu</a>
  </li>
  <li class="nav-item pt-4">
    <a class="nav-link" href="#">Contact</a>
  </li>
</ul>
`;

const renderNav = () => {
    navWrap.insertAdjacentHTML('beforebegin', nav);
  };
  
  export default renderNav;