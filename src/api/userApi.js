function createData(name, company, role, verified, status) {
  return {
    name,
    company,
    role,
    verified,
    status,
  };
}

// helper const
const [yes, no, banned, active] = ["Yes", "No", "Banned", "Active"];
const [uxd, uud, fsd, bd, pm, fed] = [
  "UX Designer",
  "UI/UX Designer",
  "Full Stack Designer",
  "Backend Developer",
  "Project Manager",
  "Front End Developer",
];

export const userData = [
  createData("Herman Reilly", "Mitchell-Predovic", pm, yes, banned),
  createData("Isabel Rolfson", "McKenzie-Smith", fsd, no, banned),
  createData("Katie Lehner", "Stehr Inc", fed, yes, active),
  createData("Kelly Gutmann", "Moore Group", uxd, yes, banned),
  createData("Lee Block", "Sipes & Padberg", fed, yes, banned),
  createData(
    "Alison Kovacek Jr.",
    "Bednar, Lindgren and Schmidt",
    uud,
    yes,
    banned
  ),
  createData("Mr. Desiree Koelpin", "Medhurst-Ziemann", pm, yes, banned),
  createData("Mrs. Carolyn Stiedemann", "Schuppe-Windler", pm, yes, banned),
  createData("Mrs. Casey Hauck", "Kuvalis LLC", bd, yes, banned),
  createData("Alma Bartoletti DDS", "Blick-Bernier", fsd, yes, active),
  createData("Archie Bechtelar", "Greenfelder-Leuschke", uud, yes, active),
  createData("Carol Price", "Spencer Group", uud, yes, banned),
  createData("Dr. Ellen Gislason", "Dickinson-Aufderhar", bd, no, banned),
  createData("Duane Beatty", "Blanda-Wiza", fsd, no, active),
  createData("Dwight Cummings V", "Baumbach", uud, yes, banned),

  createData("Lois Dach", "Schimmel-Swift", uxd, no, active),
  createData("Louis O'Reilly II", "Walsh LLC", bd, no, banned),
  createData("Merle Kshlerin", "Hickle, Ullrich and Mueller", uud, yes, banned),

  createData("Nathaniel Abernathy", "Kuhn-Boehm", uxd, no, banned),
  createData("Nellie Schimmel", "Haley, Paucek and Goodwin", fsd, yes, banned),
  createData("Wilbert McClure", "Strosin-Wisoky", fsd, yes, banned),
  createData("Nicole Johnson PhD", "Ward-Jacobi", fsd, no, banned),
  createData("Van Dibbert DVM", "Bergnaum-Schowalter", fsd, no, active),
  createData("Viola Muller I", "Simonis-Runolfsson", fed, yes, banned),
];
