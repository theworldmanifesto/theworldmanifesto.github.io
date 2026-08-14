import os

folder_path = 'lang/lang_texts'

for filename in os.listdir(folder_path):
    if filename.endswith('.txt') and filename != 'en_SPECIAL.txt':
        file_path = os.path.join(folder_path, filename)
        
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        content_str = ''.join(lines)
        if '--- START TABLE ---' in content_str:
            continue # Hoppa över om den redan har markörer

        new_lines = []
        in_table = False
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Identifiera starten: Om nästa rad innehåller "25 %", sätt markör ovanför rubriken
            next_line = lines[i+1] if i + 1 < len(lines) else ""
            if ('25 %' in next_line or '25%' in next_line) and not in_table:
                new_lines.append('--- START TABLE ---\n')
                in_table = True
            
            new_lines.append(line)
            
            # Identifiera slutet: När vi passerat "100 %", läs med stycket och stäng tabellen
            if in_table and ('100 %' in line or '100%' in line):
                while i + 1 < len(lines) and lines[i+1].strip() != '':
                    i += 1
                    new_lines.append(lines[i])
                
                new_lines.append('--- END TABLE ---\n')
                in_table = False
                
            i += 1

        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

print("Klar! Alla filer har nu fått markörer runt Frihetstrappan.")