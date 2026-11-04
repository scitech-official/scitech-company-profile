"use client";

interface DatasheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatasheetModal({ isOpen, onClose }: DatasheetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-2xl bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-slate-800/80 border-b border-slate-700 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-bold font-mono text-[#fe7a00] uppercase tracking-widest">
              Hardware Data Specification
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">HYDRA 01 Edge Industrial Controller</h3>
            <p className="text-xs text-slate-400">Arsitektur Otomasi Irigasi &amp; Telemetri Sensor Lapangan</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Content Table */}
        <div className="p-6 sm:p-8 space-y-4 text-xs text-slate-300 max-h-[60vh] overflow-y-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              {[
                ["Microcontroller", "ESP32 Dual-Core Xtensa LX6 @ 240 MHz"],
                ["Operating System", "FreeRTOS Deterministic Multi-Threading"],
                ["Display Panel", "LCD Monokrom Alfanumerik 16×2 Karakter"],
                ["Manual Input", "Keypad Matrix 4×4 Polimer Kontak Tahan Lama"],
                ["Konektivitas Nirkabel", "WiFi 802.11 b/g/n, Bluetooth v4.2 BR/EDR & BLE"],
                ["Protokol Industri", "Modbus RTU / TCP, MQTT over TLS, HTTP REST API"],
                ["Proteksi Enclosure", "Polimer Weatherproof IP67 Tahan Air & Partikel Debu"],
                ["Power Supply", "DC 12V / 24V Adaptif (Dukungan Solar Panel DC-DC)"],
                ["I/O Channels", "8 Relay Outputs, 4 ADC Inputs (4-20mA / 0-5V), RS485 Port"],
                ["Garansi Purna-Jual", "6 Bulan Ganti Unit Fisik + 12 Bulan Dukungan Firmware"],
              ].map(([label, val], idx) => (
                <tr key={label} className={idx % 2 === 0 ? "bg-slate-800/40" : "bg-transparent"}>
                  <td className="py-2.5 px-3 font-semibold text-slate-400 border-b border-slate-800 w-2/5 font-mono text-[11px]">
                    {label}
                  </td>
                  <td className="py-2.5 px-3 text-white border-b border-slate-800 w-3/5 font-mono text-[11px]">
                    {val}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Actions */}
        <div className="p-5 sm:p-6 bg-slate-800/80 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-400 font-mono">
            Siap diintegrasikan ke lahan pertanian atau fasilitas industri
          </span>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-700 cursor-pointer"
            >
              Tutup
            </button>
            <a
              href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20jadwalkan%20PoC%20dan%20pembelian%20unit%20HYDRA%20Industrial%20Controller."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-5 py-2.5 rounded-full bg-[#fe7a00] hover:bg-[#e56e00] text-xs font-bold text-white shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Pesan Unit HYDRA Sekarang ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

