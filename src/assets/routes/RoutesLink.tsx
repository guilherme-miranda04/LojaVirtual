export function getRoutesLink(pathname: string) {
  const routes = [];

  if (pathname.startsWith("/account")) {
    routes.push({ name: "Minha Conta", path: "/account" });

    if (pathname.includes("/orders")) {
      routes.push({ name: "Meus Pedidos", path: "/account/orders" });
    }

    if (pathname.includes("/dashboard")) {
      routes.push({ name: "Dashboard", path: "/account/dashboard" });
    }

    if (pathname.includes("/address")) {
      routes.push({ name: "Meus Endereços", path: "/account/address" });
    }
  }

  return routes;
}

export function getRoutesMenu(accountType: string) {
  /* return [
    { name: "Minha Conta", path: "/account" },
    { name: "Meus Pedidos", path: "/account/orders" },
    { name: "Meus Endereços", path: "/account/address" },
    { name: "Painel Admin", path: "/account/dashboard" },
    { name: "Sair", path: "/" },
  ]; */

  const routes = [
    { name: "Minha Conta", path: "/account" },
    { name: "Meus Pedidos", path: "/account/orders" },
    { name: "Meus Endereços", path: "/account/address" },
  ];

  if (accountType === "admin") {
    routes.push({ name: "Painel Admin", path: "/account/dashboard" });
  }

  routes.push({ name: "Sair", path: "/" });

  return routes;
}
