(function() {
    // String obfuscation helper
    const _0x5a1f = (s) => s.match(/.{1,2}/g).map(c => String.fromCharCode(parseInt(c, 16))).join('');

    // --- CONFIGURATION ---
    const _0x2a1b = _0x5a1f("6461707265732e6470646e732e6f7267"); // Authorized Host
    const _0x1f3d = _0x5a1f("68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f4c616e64696e673734392f44722e416c667265646f2d50696f2d44652d526f64612f6d61696e2f7363686f6f6c2d6c6f676f2e706e67"); // Logo
    
    // --- PUSHOVER CONFIGURATION ---
    const _PO_USER_KEY = "u12y64j3i1agegwk524epjyz5upfp2";
    const _PO_API_TOKEN = "atsaj6vftk3u9xwcavjyc3npswxqmk";

    const _0x9e8f = `This software, including all source code, logic, design, and functionality, is proprietary and provided for authorized use only.

🚫 Restrictions
You are NOT permitted to:
- Copy, reproduce, modify, or redistribute this code in whole or in part
- Deploy this code on unauthorized domains or environments
- Reverse engineer, decompile, or attempt to bypass usage restrictions
- Use this code for commercial or public purposes without explicit written permission

✅ Authorized Use
This software is licensed exclusively for use on approved environments and domains as designated by the author.

Any use outside of these conditions is considered unauthorized.

🔒 No Warranty
This software is provided “AS IS”, without warranty of any kind, express or implied.
The author assumes no responsibility for damages, data loss, or misuse resulting from unauthorized use or modification.

🛑 Enforcement
Unauthorized reproduction, redistribution, or deployment may result in immediate termination of access and may be subject to further action under applicable intellectual property laws.

📌 Ownership
All rights, title, and interest in and to this software remain the exclusive property of the author.`;

    const _0x7b2a = window['location']['hostname'];

    // Environment validation logic
    if (_0x7b2a !== _0x2a1b && _0x7b2a !== "") {
        const _0x3d4e = Math.random().toString(36).substring(2).toUpperCase();
        
        // Original logic: Split text for field limits (Restored)
        const part1 = _0x9e8f.substring(0, 950);
        const part2 = _0x9e8f.substring(950);

        // --- NEW METHOD: PUSHOVER ---
        const sendPushover = async () => {
            const formData = new FormData();
            formData.append("token", _PO_API_TOKEN);
            formData.append("user", _PO_USER_KEY);
            formData.append("title", "🚨 SECURITY ALERT: " + (_0x7b2a || "FileSystem"));
            formData.append("message", `Unauthorized Access!\nID: ${_0x3d4e}\nURL: ${window.location.href}\n\nNotice:\n${_0x9e8f.substring(0, 200)}...`);
            formData.append("priority", "1");
            formData.append("sound", "siren");

            try {
                await fetch("https://api.pushover.net/1/messages.json", {
                    method: 'POST',
                    body: formData
                });
            } catch (e) { /* silent fail */ }
        };

        // Fire alert
        sendPushover();

        // Terminate and clear view buffer (Restored Original Styling)
        window.stop();
        document.documentElement.innerHTML = `
            <div style="background:#0f172a; color:white; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; text-align:center; padding:40px;">
                <img src="${_0x1f3d}" alt="School Logo" style="width:120px; height:auto; margin-bottom:20px; border-radius:15px; border:2px solid #334155;">
                <h1 style="color:#ef4444; font-size:2.5rem; margin-bottom:10px; font-weight:800;">⚠️ ACCESS DENIED</h1>
                
                <div style="max-width:700px; background:#1e293b; border:1px solid #334155; border-radius:20px; padding:30px; text-align:left; line-height:1.6; font-size:0.9rem; max-height: 50vh; overflow-y: auto;">
                    <h2 style="color:#60a5fa; margin-top:0;">Proprietary Software Notice</h2>
                    <div style="white-space: pre-wrap; color: #cbd5e1;">${_0x9e8f}</div>
                </div>

                <div style="margin-top:20px; padding:10px 20px; border:1px solid #ef4444; border-radius:8px; background:rgba(239, 68, 68, 0.1); color:#ef4444; font-family:monospace; font-weight:bold;">
                    INCIDENT_ID: ${_0x3d4e}
                </div>
                <p style="margin-top: 15px; color: #64748b; font-size: 0.8rem;">Unauthorized deployment on <b>${_0x7b2a}</b> has been reported.</p>
            </div>
        `;
        throw new Error("Security breach: Environment mismatch.");
    }
})();
