const input = document.getElementById('input');
const reset = document.getElementById('reset');
const list = document.getElementById('list');
const names = [
    '_animeLime98',
    'AFatAllen',
    'AmaScaryBot',
    'AndromedaPants',
    'BaliB_here',
    'Basic20',
    'DeathEaterCrunch',
    'DownMarket4',
    'EatMyBakedBeans','FoodVixen',
    'Gfgghjklkjhgcfghjkl',
    'GigaHorse12',
    'GreenEye1',
    'JaNovaWitness',
    'JellyJam11',
    'JNKINS0000',
    'JohnCleanEyeball',
    'KYR_Sl0wly',
    'LANLock',
    'Mattiplier',
    'NCT_Nerd',
    'NoHandsGamer24',
    'NoUsernameWhoops',
    'O_OPandaScaryO_O',
    'OmegaPepperoni',
    'OverTheOcean',
    'PhotonSavage',
    'RewBieRie',
    'RibEyeSteak',
    'RightOfNoWhere',
    'RobotSomething',
    'SavageRenegade',
    'ShadowHeatz', 
    'sidearmsnoreason',
    'SirNotABeast',
    'SomebodyEpic',
    'StealthyGuyFromTwitch',
    'SteamUser66',
    'SwormLinux',
    'TanDDM',
    'TheNotSoRadFred',
    'TMGamer836', 
    'Totally_Not_A_Bot',
    'VikkMoon',
    'WinterTaco73',
    'WWednesdee',
    'x_DieselSoda_x',
    'xXMommyRatXx',
    'xxXSilentXxx',
    'xXxXxCamoWatcherxXxXx'
];

const createItem = (text) => {
  const item = document.createElement("li");
  const name = document.createTextNode(text);
  item.appendChild(name);
  return item;
};

const showAll = () => {
  list.innerHTML = '';
  names.forEach((ele) => {
    list.appendChild(createItem(ele));
  });
};

input.addEventListener('input', () => {
  const val = input.value.toLowerCase();

  if (!val) {
    showAll();
    return;
  }

  const filtered = names.filter((ele) => {
    return ele.toLowerCase().startsWith(val);
  });

  list.innerHTML = '';
  if (!filtered.length) {
    const item = createItem("Not AI");
    item.classList.add("alert");
    list.appendChild(item);
    return;
  }

  filtered.forEach((ele) => {
    list.appendChild(createItem(ele));
  });
});

reset.addEventListener('click', () => {
  input.value = '';
  showAll();
});

showAll();
