import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Component from './Component.vue';

Vue.use(Vuetify);

const vuetify = new Vuetify({});

describe('Component', () => {
  let localVue;
  let wrapper;

  describe('When the component is mounted', () => {
    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Vuetify);

      wrapper = mount(Component, {
        localVue,
        vuetify,
      });
    });

    it('Then props should be returned for a v-button Vue instance', async () => {
      const submitButtonWrapper = wrapper.find('#submitButton');
      expect(submitButtonWrapper.props()).toBeDefined();
    });

    it('Then props should be returned for a v-text-field Vue instance', async () => {
      // NOTE: DO NOT use 'id' when finding a v-text-field as the 'id' attribute
      // is passed down to the <input /> element, meaning that you're no longer
      // getting the root (Vue instance) of v-text-field anymore, which leads
      // to the test shitting itself. However, using an id on a v-button does 
      // work as expected.
      // https://github.com/vuetifyjs/vuetify/issues/12362
      const emailTextFieldWrapper = wrapper.find('.v-text-field');
      expect(emailTextFieldWrapper.props()).toBeDefined();
    });
  });
});
