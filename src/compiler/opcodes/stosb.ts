import {registers, memory} from "@stores";
import { expand16bitTo20Bit } from "src/formatConverter";
import { register } from "svelte-i18n";

// multiplies two numbers together
export default  {
    writesTo: [],
    run: () => {

        let di = registers.get('di')
        let es = registers.get('es')

        console.log(es + ' - ' + es.toString(16))

        console.log('es:[di] = ' + es.toString(16) + ' : ' + di.toString(16));
        console.log('es:[di] = ' + (es << 4).toString(16) + ' : ' + di.toString(16))

        let ax = registers.get('ax');

        let address = (expand16bitTo20Bit(es) << 4) + di;

        console.log('ax = ' + ax.toString())
        console.log('adress : '+address.toString(16))

        memory.set(address, ax , 8)
        //registers.set('di', di + 1)

        //registers.setWithFlags('ax', result)
    },
}
