import Front from '../pages/front';
import First from '../pages/first';
import About from '../pages/about'
import Home from '../pages/home'
import Settings from '../stack/settings'
import OcrDetail from '../pages/ocrDetail'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
             <Stack.Screen name='First' component={First} options={{ headerShown: false }} />
             <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
            <Stack.Screen name='Front' component={Front} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="OcrDetail" component={OcrDetail} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}


export default HomeStack;