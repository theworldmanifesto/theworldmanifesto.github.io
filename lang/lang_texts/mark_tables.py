import os
import re

# Sökväg till mappen där språkfilerna ligger
folder_path = 'lang/lang_texts'

# Lista alla filer i mappen
for filename in os.listdir(folder_path):
    # Hoppa över en_SPECIAL.txt om du inte vill ändra i den, annars tar vi alla .txt-filer
    if filename.endswith('.txt') and filename != 'en_SPECIAL.txt':
        file_path = os.path.join(folder_path, filename)
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Om filen inte redan har markörerna
        if '--- START TABLE ---' not in content:
            lines = content.split('\n')
            new_lines = []
            in_table = False
            
            for line in lines:
                # Känner igen starten av tabellen (t.ex. när raden innehåller 25 % eller GNR)
                if ('25 %' in line or '25%' in line) and not in_table:
                    new_lines.append('--- START TABLE ---')
                    in_table = True
                
                new_lines.append(line)
                
                # Känner igen slutet av tabellen (efter raden med 100 %)
                if ('100 %' in line or '100%' in line) and in_table:
                    new_lines.append('--- END TABLE ---')
                    in_table = False
            
            # Spara den uppdaterade filen
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))

print("Alla tabeller har märkts upp med START och END!")import os
import re

# Sökväg till mappen där språkfilerna ligger
folder_path = 'lang/lang_texts'

# Lista alla filer i mappen
for filename in os.listdir(folder_path):
    # Hoppa över en_SPECIAL.txt om du inte vill ändra i den, annars tar vi alla .txt-filer
    if filename.endswith('.txt') and filename != 'en_SPECIAL.txt':
        file_path = os.path.join(folder_path, filename)
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Om filen inte redan har markörerna
        if '--- START TABLE ---' not in content:
            lines = content.split('\n')
            new_lines = []
            in_table = False
            
            for line in lines:
                # Känner igen starten av tabellen (t.ex. när raden innehåller 25 % eller GNR)
                if ('25 %' in line or '25%' in line) and not in_table:
                    new_lines.append('--- START TABLE ---')
                    in_table = True
                
                new_lines.append(line)
                
                # Känner igen slutet av tabellen (efter raden med 100 %)
                if ('100 %' in line or '100%' in line) and in_table:
                    new_lines.append('--- END TABLE ---')
                    in_table = False
            
            # Spara den uppdaterade filen
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))

print("Alla tabeller har märkts upp med START och END!")
