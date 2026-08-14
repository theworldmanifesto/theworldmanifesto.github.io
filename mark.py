import os

folder_path = 'lang/lang_texts'

for filename in os.listdir(folder_path):
    if filename.endswith('.txt') and filename != 'en_SPECIAL.txt':
        file_path = os.path.join(folder_path, filename)
        
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        # Rensa bort alla gamla/felaktiga markörer först
        lines = [line for line in lines if line.strip() not in ['--- START TABLE ---', '--- END TABLE ---']]

        # Hitta radindex för "25%" / "25 %" och "100%" / "100 %"
        idx_25 = -1
        idx_100 = -1
        
        for idx, line in enumerate(lines):
            if ('25 %' in line or '25%' in line) and idx_25 == -1:
                idx_25 = idx
            if ('100 %' in line or '100%' in line) and idx_100 == -1:
                idx_100 = idx

        if idx_25 != -1 and idx_100 != -1:
            # Flytta START bakåt för att få med hela rubrikblocket (upp till 5 rader bakåt om det finns text)
            start_idx = idx_25
            for check_idx in range(idx_25 - 1, max(-1, idx_25 - 6), -1):
                if lines[check_idx].strip() != '':
                    start_idx = check_idx
                elif start_idx != idx_25: 
                    # Om vi redan hittat text och stöter på en tomrad ovanför rubriken, stanna där
                    break

            # Flytta END framåt för att få med hela 100%-stycket
            end_idx = idx_100
            for check_idx in range(idx_100 + 1, min(len(lines), idx_100 + 6)):
                if lines[check_idx].strip() != '':
                    end_idx = check_idx
                else:
                    break

            # Bygg ihop filen igen med exakt EN start- och EN slutmarkör
            new_lines = (
                lines[:start_idx] +
                ['--- START TABLE ---\n\n'] +
                lines[start_idx:end_idx + 1] +
                ['\n\n--- END TABLE ---\n'] +
                lines[end_idx + 1:]
            )

            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)

print("Städning klar! Alla filer har nu exakt en korrekt placerad tabell utan dubbelmarkörer.")