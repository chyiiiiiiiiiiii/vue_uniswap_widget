
<template>
  <div id="app">
    <div class="uniswap-container">
      <uniswap-vue
        :uniswapDappSharedLogicContext="uniswapDappSharedLogicContext"
        v-if="uniswapDappSharedLogicContext && isShowUniswap"
      />
    </div>
    <button class="button" @click="onSwitch">
      {{ isShowUniswap ? 'Hide' : 'Show' }}
    </button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { ChainId, ETH } from 'uniswap-dapp-integration-shared';

export default defineComponent({
  name: 'ServeDev',
  components: {},
  data() {
    return {
      uniswapDappSharedLogicContext: undefined,
      isShowUniswap: false,
    };
  },
  async mounted() {
    const addresses = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    this.uniswapDappSharedLogicContext = {
      supportedNetworkTokens: [
        {
          chainId: ChainId.MAINNET,
          defaultInputToken: ETH.MAINNET().contractAddress,
          defaultOutputToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          supportedTokens: [
            { contractAddress: ETH.MAINNET().contractAddress },
            { contractAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F' }, // DAI
          ],
        },
        {
          chainId: ChainId.ROPSTEN,
          defaultInputToken: ETH.ROPSTEN().contractAddress,
          defaultOutputToken: '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
          supportedTokens: [
            { contractAddress: ETH.ROPSTEN().contractAddress },
            { contractAddress: '0xaD6D458402F60fD3Bd25163575031ACDce07538D' }, // DAI
          ],
        },
        {
          chainId: ChainId.RINKEBY,
          defaultInputToken: ETH.RINKEBY().contractAddress,
          defaultOutputToken: '0x33F82B26a40Bc1Be7074750A1558D484B2562B7b',
          supportedTokens: [
            { contractAddress: ETH.RINKEBY().contractAddress },
            { contractAddress: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735' }, // DAI
            { contractAddress: '0x33F82B26a40Bc1Be7074750A1558D484B2562B7b' }, // My PapToken
          ],
        },
      ],
      ethereumAddress: addresses[0],
      ethereumProvider: window.ethereum,
    };
  },
  methods: {
    onSwitch() {
      this.isShowUniswap = !this.isShowUniswap
    }
  },
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  z-index: 1;
}

.uniswap-container {
  position: relative;
  top: 100px;
  max-width: 400px;
  width: 100%;
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  border-radius: 24px;
  margin-top: 1rem;
}

.button {
  position: absolute;
  top: 40px;
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  padding: 4px 12px;
  border-radius: 24px;
  background-color: black;
  color: white;
}
</style>
