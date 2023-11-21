import React, { useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react'

const EmailTemplate = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const placeholder = `Hallo {{ activity.user }}

  Ihre {{ activity.title }} Aktivität ist fällig am {{ activity.due_date }}
  
  {{#action_button}}Aktivität ansehen{{/action_button}}`

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder,
    }),
    [placeholder],
  )

  return (
    <>
      <div className="row card p-4">
        <h5>E-Mail Vorlage</h5>
        {/* Email template */}
        <hr />
        <div className="row card p-2">
          <div className="col-sm-7">
            <span>Template</span>&nbsp;&nbsp;
            <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
              Aktivitätserinnerung
              {/* Activity reminder */}
            </button>
            &nbsp;&nbsp;
            <span>Schauplatz</span>&nbsp;&nbsp;
            {/* Scene */}
            <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
              en
            </button>
          </div>
        </div>
        <p>Thema</p>
        <input
          type="text"
          className="form-control p-2"
          placeholder="Ihre {{ activity.title }} Aktivität ist fällig am {{ activity.due_date }}"
        />
        <p>Inhalt</p>
        <div className="row">
          <div className="col-sm-12">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>
        </div>
        <div className="row">
          <span>Platzhalter</span>
          <textarea
            name=""
            rows={15}
            id=""
            className="form-control"
            placeholder={`{{ Aktivität.Titel }} - Titel
  {{ activity.type }} - Typ der Aktivität
  {{ activity.due_date }} - Fälligkeitsdatum
  {{ activity.end_date }} - Enddatum
  {{ activity.reminder_minutes_before }} - Erinnerung
  {{ activity.user }} - Besitzer
  {{ activity.guests }} - Gäste
  {{ activity.description }} - Beschreibung
  {{ activity.owner_assigned_date }} - Zugewiesenes Datum des Eigentümers
  {{{ activity.note }}} - Notiz
  {{ activity.creator }} - Erstellt von
  {{ activity.reminded_at }} - Datum der gesendeten Erinnerung
  {{ activity.completed_at }} - Erledigt am
  {{ activity.updated_at }} - Aktualisiert am`}
          ></textarea>
        </div>
        <br />
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
              Speichern
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(EmailTemplate)
