import { PageHeader } from '../components/Ui'
import { techStack } from '../data'

export default function Architecture() {
  return (
    <div>
      <PageHeader title="Technical Architecture" subtitle="From edge meter to marketplace clearing." />

      <div className="grid-2">
        <div className="card" style={{ padding: 20 }}>
          {techStack.map((g) => (
            <div className="stack-group" key={g.group}>
              <div className="stack-group-title">{g.group}</div>
              <div className="stack-chips">
                {g.items.map((i) => (
                  <span className="stack-chip" key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="code-panel">
          <div className="code-head">meter_ingest.py</div>
          <pre>{`@app.post("/v1/meters/{meter_id}/reading")
async def ingest_reading(meter_id: str, reading: MeterReading):
    baseline = await get_machinery_baseline(meter_id)
    drift = (reading.kwh - baseline.kwh) / baseline.kwh
    if drift > ANOMALY_THRESHOLD:
        await flag_anomaly(meter_id, drift)
    await hash_chain_append(meter_id, reading)
    return {"status": "verified", "drift_pct": round(drift * 100, 1)}`}</pre>
        </div>
      </div>
    </div>
  )
}
