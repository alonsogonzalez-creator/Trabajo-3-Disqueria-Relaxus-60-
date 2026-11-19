const NAV_ITEMS = [
  ["panel.html","Panel principal","bi-grid-1x2"],
  ["productos.html","Productos / Inventario","bi-disc"],
  ["producto-form.html","Formulario de producto","bi-plus-square"],
  ["venta.html","Registrar venta","bi-receipt"],
  ["historial.html","Historial / Reportes","bi-bar-chart"]
];
function renderShell(active){
  const nav = NAV_ITEMS.map(([href,label,icon])=>`<a class="sidebar-link ${active===href?'active':''}" href="${href}"><i class="bi ${icon}"></i><span>${label}</span></a>`).join("");
  document.querySelector("#app-navbar").innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark navbar-relaxus"><div class="container-fluid px-3 px-lg-4"><a class="navbar-brand" href="panel.html">RELAXUS<span class="brand-dot">.</span></a><div class="ms-auto d-flex align-items-center gap-3"><span class="text-white-50 small d-none d-sm-inline">Gestión interna</span><button class="btn btn-sm btn-outline-light" id="logoutBtn"><i class="bi bi-box-arrow-right me-1"></i>Cerrar sesión</button></div></div></nav>`;
  document.querySelector("#app-sidebar").innerHTML = `<aside class="sidebar p-3"><div class="small text-uppercase text-white-50 fw-bold mb-2 px-2">Menú principal</div><nav class="nav-list">${nav}</nav><div class="mt-4 pt-3 border-top border-secondary small text-white-50 px-2">Sistema de gestión<br>Disquería Relaxus</div></aside>`;
  document.querySelector("#app-footer").innerHTML = `<footer class="footer-relaxus py-4 text-center">© 2026 Relaxus · Prototipo académico de gestión interna</footer>`;
  document.querySelector("#logoutBtn").addEventListener("click",()=>{sessionStorage.removeItem("relaxus_user");location.href="index.html";});
}
function requireAuth(){
  if(!sessionStorage.getItem("relaxus_user")){location.href="index.html";return false;}
  return true;
}
function money(value){return new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0}).format(Number(value)||0);}
function getProducts(){return JSON.parse(localStorage.getItem("relaxus_products")||"null");}
async function loadProducts(){
  let data=getProducts();
  if(!data){
    const response=await fetch("data/productos.json");
    if(!response.ok) throw new Error("No se pudo cargar data/productos.json");
    data=await response.json();
    localStorage.setItem("relaxus_products",JSON.stringify(data));
  }
  return data;
}
function saveProducts(data){localStorage.setItem("relaxus_products",JSON.stringify(data));}
function getSales(){return JSON.parse(localStorage.getItem("relaxus_sales")||"[]");}
function saveSales(data){localStorage.setItem("relaxus_sales",JSON.stringify(data));}
function stockBadge(stock){
  if(Number(stock)===0)return `<span class="badge text-bg-danger stock-pill">Agotado · 0</span>`;
  if(Number(stock)<=3)return `<span class="badge text-bg-warning stock-pill">Stock bajo · ${stock}</span>`;
  return `<span class="badge text-bg-success stock-pill">Disponible · ${stock}</span>`;
}
function alertBox(message,type="info"){return `<div class="alert alert-${type} alert-dismissible fade show" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button></div>`;}
function pageHeader(kicker,title,subtitle,action=""){return `<div class="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4"><div><div class="eyebrow mb-2">${kicker}</div><h1 class="page-title h2 mb-1">${title}</h1><p class="text-secondary mb-0">${subtitle}</p></div>${action}</div>`;}