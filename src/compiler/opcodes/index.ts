// to add new instruction:
// 1) implement it - use already implemented instructions as a inspiration
// 2) import it here
// 3) add it to opcodes object

// If rollup throws error after adding new .ts file, restart it
import add from "./add"
import and from "./and"
import sub from "./sub"
import mov from "./mov"
import mul from "./mul"
import xor from "./xor"
import nop from "./nop"
import inc from "./inc";
import dec from "./dec";
import push from "./push";
import pop from "./pop";
import jmp from "./jmp";
import test from "./test";
import je from "./je";
import jne from "./jne";
import ret from "./ret";
import call from "./call";
import cmp from "./cmp";
import input from "./in";  // in is special keyword in javascipt
import jp from "./jp";
import jnp from "./jnp";
import js from "./js";
import jns from "./jns";
import neg from "./neg";
import jo from "./jo";
import jno from "./jno";

import shr from "./shr";
import shl from "./shl";
import retn from "./retn";
import stosb from "./stosb";


export const jumps = {

}

export const opcodes = {
    add,
    and,
    sub,
    mov,
    mul,
    xor,
    nop,
    inc,
    dec,
    push,
    pop,
    jmp,
    test,
    je,
    ret,
    call,
    jz: je,
    jne,
    jnz: jne,
    cmp,
    in: input,
    jp,
    jpe: jp,
    jnp,
    jpo: jnp,
    js,
    jns,
    jo,
    jno,
    neg,

    shr,
    shl,
    retn,
    stosb
}

export const opcodes_0_operands = []
export const opcodes_1_operands = []
export const opcodes_2_operands = []

Object.entries(opcodes).map(entry => {
    let [opcodeName, opcodeContent] = entry

    if (opcodeContent.run.length === 0) {
        opcodes_0_operands.push(opcodeName)
    }
    else if (opcodeContent.run.length === 1) {
        opcodes_1_operands.push(opcodeName)
    }
    else if (opcodeContent.run.length === 2) {
        opcodes_2_operands.push(opcodeName)
    }
})
