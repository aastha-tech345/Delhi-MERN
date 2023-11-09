import React from 'react'

export default function Attorney() {
  return (
    <>
      <h5 className="mt-2 mx-4">Vollmachten</h5>
      <div className="card m-2">
        <div className="row p-3">
          <div className="col-sm-12">
            <p style={{ color: 'blue' }}>GESUNDHEITSVOLLMACHT</p>
            &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
            <input type="checkbox" />
            <br />
            <p style={{ color: 'blue' }}>Bevollmächtigte Person(en):</p>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Vorname</th>
                  <th>Nachname</th>
                  <th>Adresse</th>
                  <th>Telefon</th>
                  <th>Mobil</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-sm-12">
            <p style={{ color: 'blue' }}>VORSORGEVOLLMACHT</p>
            &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
            <input type="checkbox" />
            <br />
            <p style={{ color: 'blue' }}>Bevollmächtigte Person(en):</p>
            &nbsp;Datensatz aus Gesundheitsvollmacht übernehmen&nbsp;&nbsp;&nbsp;
            <input type="checkbox" />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Vorname</th>
                  <th>Nachname</th>
                  <th>Adresse</th>
                  <th>Telefon</th>
                  <th>Mobil</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p style={{ color: 'blue' }}>BETREUUNGSVER FÜGUNG</p>
            &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
            <input type="checkbox" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <p style={{ color: 'blue' }}>VOLLMACHT Z UR A B SICHERUNG DES DIGITALEN ER B ES</p>
            &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
            <input type="checkbox" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-9"></div>
          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn"
              style={{ background: '#d04545', color: 'white' }}
            >
              Abbrechen
            </button>
            &nbsp; &nbsp;
            <button
              type="button"
              style={{ background: '#0b5995', color: 'white' }}
              className="btn btn"
            >
              Speichern Sie
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
