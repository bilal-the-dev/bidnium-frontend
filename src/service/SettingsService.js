import SETTINGS from '@/constants/Settings';
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';

export class SettingService {
    static INSTANCE = new SettingService();

    isUseDarkMode() {
        return localStorage.getItem(SETTINGS.USE_DARK_MODE) === 'on';
    }

    setUseDarkMode(value) {
        localStorage.setItem(SETTINGS.USE_DARK_MODE, value ? 'on' : 'off');
    }

    getMenuMode() {
        return localStorage.getItem(SETTINGS.MENU_MODE) || 'static';
    }

    setMenuMode(value) {
        localStorage.setItem(SETTINGS.MENU_MODE, value);
    }

    getSurfaceTheme() {
        return localStorage.getItem(SETTINGS.SURFACE_THEME) || 'gray';
    }

    setSurfaceTheme(value) {
        localStorage.setItem(SETTINGS.SURFACE_THEME, value);
    }

    getPrimaryTheme() {
        return localStorage.getItem(SETTINGS.PRIMARY_THEME) || 'indigo';
    }

    setPrimaryTheme(value) {
        localStorage.setItem(SETTINGS.PRIMARY_THEME, value);
    }

    getPresetTheme() {
        return localStorage.getItem(SETTINGS.PRESET_THEME) || 'Lara';
    }

    getPresetThemeComponent() {
        return this.getPresetTheme() === 'Lara' ? Lara : Aura;
    }

    setPresetTheme(value) {
        localStorage.setItem(SETTINGS.PRESET_THEME, value);
    }
}
