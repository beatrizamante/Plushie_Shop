import Datacenter from "./src/db/Datacenter";
import PlushieController from "./src/control/PlushieController";
import PrimaryScreen from "./src/view/SaleScreen";

const datacenter = new Datacenter();
const controller = new PlushieController(datacenter);
const primaryScreen = new PrimaryScreen(controller);

primaryScreen.display();
