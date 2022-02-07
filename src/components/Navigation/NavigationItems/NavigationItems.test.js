import React  from 'react';
import { configure, shallow }from 'enzyme';
import Adaper from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter:new Adaper()});
describe('<NavigationItems/>',() =>{
    let  wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems isAuthenticated />);
    });
    it('should rener then two <NavigationItem /> element if not authenticated',()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should rener then two <NavigationItem /> element if not authenticated',()=>{
        wrapper.setProps({isAuthenticated:true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should rener then two <NavigationItem /> element if not authenticated',()=>{
        wrapper.setProps({isAuthenticated:true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });

});