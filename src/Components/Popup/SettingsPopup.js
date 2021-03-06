import Popup from './Popup';
import styles from './SettingsPopup.module.scss';
import customCheckbox from './customCheckbox.module.scss';

class SettingsPopup extends Popup {
    style = {
        maxWidth: '440px',
        height:   '500px',
    }

    state = {
        settings: {
            ...this.props.settings,
        }
    }

    handleOnChangeSlider = (e, setting) => {
        let settings = {...this.state.settings};
        settings[setting] = e.target.value;
        this.setState({settings: settings});
    }

    handleOnChangeCheckbox = (e, setting) => {
        let settings = {...this.state.settings};
        settings[setting] = e.target.checked;
        this.setState({settings: settings});
    }

    selfDestruct = () => {
        this.props.adjustSettings(this.state.settings);
        this.props.killPopup();
    }

    getGridSliderValue = () => {
        var val = this.state.settings.grid;
        if(val === '1') val = "Wyłączona";
        return val;
    }

    getClockSliderValue = () => {
        var val = this.state.settings.clock;
        if(val === '1') val = "off";
        return val;
    }

    render(){
        return super.render((
            <div className={styles.Main}>
                <h2 className={styles.MainTitle}>Siatka</h2>
                <div className={styles.MainSection}>
                    <div className={styles.MainSectionSubdivision}>
                        <label className={styles.MainLabel}>
                            Rozmiar siatki:
                            <span className={styles.MainLabelValue}>
                                {this.getGridSliderValue()}
                            </span>
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="60"
                            value={this.state.settings.grid}
                            onChange={(e) => this.handleOnChangeSlider(e, 'grid')}
                            className={styles.MainSectionSlider}
                        />
                    </div>
                    <div className={styles.MainSectionSubdivision}>
                        <label className={styles.MainLabel}>Pokaż siatkę</label>
                        <label className={customCheckbox.container}>
                            <input
                                type="checkbox"
                                checked={this.state.settings.showGrid}
                                onChange={(e) => this.handleOnChangeCheckbox(e, 'showGrid')}
                            />
                            <span className={customCheckbox.checkmark}></span>
                        </label>
                    </div>
                </div>
                <h2 className={styles.MainTitle}>Bramki</h2>
                <div className={styles.MainSection}>
                    <div className={styles.MainSectionSubdivision}>
                        <label className={styles.MainLabel}>
                            Czas propagacji:
                            <span className={styles.MainLabelValue}>
                                {this.getClockSliderValue()}ms
                            </span>
                            </label>
                        <input
                            type="range"
                            min="0"
                            max="2000"
                            value={this.state.settings.clock}
                            onChange={(e) => this.handleOnChangeSlider(e, 'clock')}
                            className={styles.MainSectionSlider}
                        />
                    </div>
                </div>
                <h2 className={styles.MainTitle}> Pola wejścia/wyjścia</h2>
                <div className={styles.MainSection}>
                    <div className={styles.MainSectionSubdivision}>
                        <label className={styles.MainLabel}>Pokaż nazwy</label>

                        <label className={customCheckbox.container}>
                            <input // na razie nie ma zastosowania TODO
                                type="checkbox"
                                checked={this.state.settings.showNodeNames}
                                onChange={(e) => this.handleOnChangeCheckbox(e, 'showNodeNames')}
                            />
                        <span className={customCheckbox.checkmark}></span>
                        </label>

                    </div>
                </div>
            </div>
        ));
    }
}

export default SettingsPopup;
