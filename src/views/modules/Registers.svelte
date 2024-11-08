<script>
    import Register from "./Register.svelte";
    import {registers, settings, executedInstructionsCount, differences} from "../../stores";
    import {_} from 'svelte-i18n'

    $: decValues = `DEBUG - ip: ${$registers.ip}, ax: ${$registers.ax}, bx: ${$registers.bx}, cx: ${$registers.cx}, dx: ${$registers.dx}, format: ${$settings.selectedFormat}`

    $: differentRegisters = $differences.registers


</script>

<style>
    .regContainer {
        display: flex;
    }

    .regContainer > div {
        padding: 1rem; 
    }

    .counter {
        color: var(--text-color)
    }
</style>

<b>{$_('views.modules.registers')}:</b>
<div class="regContainer">
    <div>
        <Register bind:value={$registers.ip} isDifferent={differentRegisters.includes('ip')} zeropad=4 bits="16" label="IP" tooltip={$_('tooltips.registers.ip')} bcolor="var(--register-ip)"/>
        <Register bind:value={$registers.ax} isDifferent={differentRegisters.includes('ax')} zeropad=4 bits="16" label="AX" tooltip={$_('tooltips.registers.ax')} bcolor="DARKSLATEGRAY"/>
        <Register bind:value={$registers.bx} isDifferent={differentRegisters.includes('bx')} zeropad=4 bits="16" label="BX" tooltip={$_('tooltips.registers.bx')}/>
        <Register bind:value={$registers.cx} isDifferent={differentRegisters.includes('cx')} zeropad=4 bits="16" label="CX" tooltip={$_('tooltips.registers.cx')}/>
        <Register bind:value={$registers.dx} isDifferent={differentRegisters.includes('dx')} zeropad=4 bits="16" label="DX" tooltip={$_('tooltips.registers.dx')}/>
    </div>
    <div>
        <Register bind:value={$registers.si} isDifferent={differentRegisters.includes('si')} zeropad=4 bits="16" label="si" tooltip={$_('tooltips.registers.si')}/>
        <Register bind:value={$registers.di} isDifferent={differentRegisters.includes('di')} zeropad=4 bits="16" label="di" tooltip={$_('tooltips.registers.di')}/>
        <Register bind:value={$registers.sp} isDifferent={differentRegisters.includes('sp')} zeropad=4 bits="16" label="sp" tooltip={$_('tooltips.registers.sp')} bcolor="var(--register-sp)"/>
        <Register bind:value={$registers.bp} isDifferent={differentRegisters.includes('bp')} zeropad=4 bits="16" label="bp" tooltip={$_('tooltips.registers.bp')} bcolor="var(--register-bp)"/>
    </div>
    <div>
        <Register bind:value={$registers.cs} isDifferent={differentRegisters.includes('cs')} zeropad=4 bits="16" label="cs" tooltip={$_('tooltips.registers.cs')} bcolor="green"/>
        <Register bind:value={$registers.ds} isDifferent={differentRegisters.includes('ds')} zeropad=4 bits="16" label="ds" tooltip={$_('tooltips.registers.ds')} bcolor="green"/>
        <Register bind:value={$registers.ss} isDifferent={differentRegisters.includes('ss')} zeropad=4 bits="16" label="ss" tooltip={$_('tooltips.registers.ss')} bcolor="green"/>
        <Register bind:value={$registers.es} isDifferent={differentRegisters.includes('es')} zeropad=4 bits="16" label="es" tooltip={$_('tooltips.registers.es')} bcolor="green"/>
    </div>
    <div>
<!--        commented out are flags not yet implemented-->
<!--        <Register bind:value={$registers.cf} isDifferent={differentRegisters.includes('cf')} bits="1" label="cf" tooltip={$_('tooltips.registers.cf')} bcolor="#008BC0"/>-->
        <Register bind:value={$registers.pf} isDifferent={differentRegisters.includes('pf')} bits="1" label="pf" tooltip={$_('tooltips.registers.pf')} bcolor="#008BC0"/>
<!--        <Register bind:value={$registers.af} isDifferent={differentRegisters.includes('af')} bits="1" label="af" tooltip={$_('tooltips.registers.af')} bcolor="#008BC0"/>-->
        <Register bind:value={$registers.zf} isDifferent={differentRegisters.includes('zf')} bits="1" label="zf" tooltip={$_('tooltips.registers.zf')} bcolor="#008BC0"/>
<!--        <Register value="-128" bits="8" label="8b" tooltip={$_('tooltips.registers.zf')} bcolor="#008BC0"/>-->
        <Register bind:value={$registers.sf} isDifferent={differentRegisters.includes('sf')} bits="1" label="sf" tooltip={$_('tooltips.registers.sf')} bcolor="#008BC0"/>
<!--        <Register bind:value={$registers.tf} isDifferent={differentRegisters.includes('tf')} bits="1" label="tf" tooltip={$_('tooltips.registers.tf')} bcolor="#008BC0"/>-->
<!--        <Register bind:value={$registers.if} isDifferent={differentRegisters.includes('if')} bits="1" label="if" tooltip={$_('tooltips.registers.if')} bcolor="#008BC0"/>-->
<!--        <Register bind:value={$registers.df} isDifferent={differentRegisters.includes('df')} bits="1" label="df" tooltip={$_('tooltips.registers.df')} bcolor="#008BC0"/>-->
        <Register bind:value={$registers.of} isDifferent={differentRegisters.includes('of')} bits="1" label="of" tooltip={$_('tooltips.registers.of')} bcolor="#008BC0"/>
    </div>
</div>

<div>
    <b>{$_('views.modules.counter')}:</b> <span class="counter">{$executedInstructionsCount}</span>
</div>
{#if $settings.developerMode}
    <button on:click={registers.reset}>DEBUG: Prenastav registre</button>
    <br>
    {decValues}
{/if}
