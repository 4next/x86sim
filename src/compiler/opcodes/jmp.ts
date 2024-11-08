import {registers} from "@stores";
import {memory} from "@stores";

// pushes value to stack
export default  {
    writesTo: ['ip'], // writes to ip, because it is jump
    run: (label) => {

        let valueToPush = registers.get('ip') + 1
        let sp = registers.get('sp')
        let address = (registers.get('ss') << 4) + sp
        memory.set(address - 2, valueToPush, 16)
        registers.set('sp', sp - 2)

        registers.set('ip', label.get())
    },
}
