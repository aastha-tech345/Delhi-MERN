import React from 'react'

export default function Services() {
  return (
    <>
      <div className="row card">
        <h4 className="p-2">Leistungen</h4>
        <hr />
        <div className="row">
          <p style={{ color: '#0b5995' }}>Materialbestellung</p>
          <div className="col-sm-6">
            <input type="checkbox" /> &nbsp; &nbsp; Bestellte Anzahl SPV-Fragebögen
          </div>
          <div className="col-sm-6">
            <input type="checkbox" />
            &nbsp; &nbsp; Bestellte Anzahl OPV-Fragebögen{' '}
          </div>
        </div>
        <br />
        <div className="row">
          <p style={{ color: '#0b5995' }}>OPV</p>
          <div className="col-sm-6">
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-5 col-form-label">
                Rechnungsbetrag eintragen
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Rechnungsdatum
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">Hinterlegung gewünschte</div>
            <div className="col-sm-2 d-flex">
              <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
              <input type="checkbox" /> &nbsp; nein
            </div>
          </div>
          <div className="row p-2">
            <p style={{ color: '#0b5995' }}>Vollmachten</p>
            <div className="col-sm-3">
              <input type="checkbox" />
              &nbsp; &nbsp;Gesundheitsvollmacht
            </div>
            <div className="col-sm-3">
              <input type="checkbox" />
              &nbsp; &nbsp;Vorsorgevollmacht
            </div>
            <div className="col-sm-3">
              <input type="checkbox" />
              &nbsp; &nbsp;Betreuungsverfügung
            </div>
            <div className="col-sm-3">
              <input type="checkbox" />
              &nbsp; &nbsp;Digitales
            </div>
          </div>
          <br />
          <div className="row">
            <p style={{ color: '#0b5995' }}>SPV Erstellung</p>
            <div className="col-sm-6 d-flex">
              Intensivmedizin und Wiederbelebung Zustimmung &nbsp; &nbsp;&nbsp;
              <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
              <input type="checkbox" /> &nbsp; nein
            </div>
            <div className="col-sm-6 d-flex">
              Notarzt Ablehnung &nbsp; &nbsp;&nbsp;
              <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
              <input type="checkbox" /> &nbsp; nein
            </div>
            <div className="row">
              <div className="col-sm-6">
                <br />
                <input type="checkbox" /> &nbsp; &nbsp; Ablehnung lebensverlängernder Maßnahme
              </div>
              <br />
              <div className="col-sm-6 d-flex">
                Letztes Wort für Bevollmächtigte &nbsp; &nbsp;&nbsp;
                <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
                <input type="checkbox" /> &nbsp; nein
              </div>
            </div>
            <div className="row">
              <p style={{ color: 'black' }}>Aufenthaltsort Lebensende</p>
              <div className="col-sm-6 d-flex">
                Selbstbestimmung &nbsp; &nbsp;&nbsp;
                <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
                <input type="checkbox" /> &nbsp; nein
              </div>
              <div className="col-sm-6 d-flex">
                Vertraute Umgebung &nbsp; &nbsp;&nbsp;
                <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
                <input type="checkbox" /> &nbsp; nein
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 d-flex">
                Krankenhaus Zustimmung &nbsp; &nbsp;&nbsp;
                <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
                <input type="checkbox" /> &nbsp; nein
              </div>
              <div className="col-sm-6 d-flex">
                Krankenhaus keinesfalls &nbsp; &nbsp;&nbsp;
                <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
                <input type="checkbox" /> &nbsp; nein
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 d-flex">
                Hospiz &nbsp; &nbsp;&nbsp;
                <input type="checkbox" /> &nbsp; ja &nbsp; &nbsp;
                <input type="checkbox" /> &nbsp; nein
              </div>
            </div>
            <div className="row">
              <p>Beistand am Lebensende</p>
              <div className="col-sm-4">
                <input type="checkbox" /> &nbsp; &nbsp; Beistand Pflege-, Palliativ-,
                ambulanter-Hospizdienst
                <input type="text" className="form-control" placeholder="Textfelder" />
              </div>
              <div className="col-sm-4">
                <input type="checkbox" /> &nbsp; &nbsp; Beistand
                Kirche/Weltanschauungsgemeinschaft/Organisation
                <input type="text" className="form-control" placeholder="Textfelder" />
              </div>
              <div className="col-sm-4">
                <input type="checkbox" /> &nbsp; &nbsp; Beistand Ärzt*in (Behandler)
                <br />
                <input type="text" className="form-control" placeholder="Textfelder" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6 d-flex">
            Organspende &nbsp; &nbsp;&nbsp;
            <input type="checkbox" value="yes" /> &nbsp; ja &nbsp; &nbsp;
            <input type="checkbox" value="no" /> &nbsp; nein
          </div>
          <div className="col-sm-6 d-flex">
            Forschungszwecke &nbsp; &nbsp;&nbsp;
            <input type="checkbox" value="yes" /> &nbsp; ja &nbsp; &nbsp;
            <input type="checkbox" value="no" /> &nbsp; nein
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 d-flex">
            Herzschrittmacher &nbsp; &nbsp;&nbsp;
            <input type="checkbox" value="yes" /> &nbsp; ja &nbsp; &nbsp;
            <input type="checkbox" value="no" /> &nbsp; nein
          </div>
          <div className="col-sm-6 d-flex">
            Defibrillator &nbsp; &nbsp;&nbsp;
            <input type="checkbox" value="yes" /> &nbsp; ja &nbsp; &nbsp;
            <input type="checkbox" value="no" /> &nbsp; nein
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 d-flex">
            Sterbehilfe ausschöpfen &nbsp; &nbsp;&nbsp;
            <input type="checkbox" value="yes" /> &nbsp; ja &nbsp; &nbsp;
            <input type="checkbox" value="no" /> &nbsp; nein
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3">Bemerkungen (intern)</div>
          <div className="col-sm-9">
            <textarea className="form-control"></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3">Auswahl Anschreiben</div>
          <div className="col-sm-9">
            <select className="form-control">
              <option value="comments">Bemerkungen (intern)</option>
              <option value="templates">Template</option>
              <option value="">Vorlagen</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-8"></div>
          <div className="col-sm-4">
            <button className="btn btn" style={{ background: '#d04545', color: 'white' }}>
              {' '}
              Abbrechen
            </button>
            &nbsp; &nbsp;
            <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
              Aktivität hinzufügen
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
